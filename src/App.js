import imagethumb from "./images/imagethumb.png";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(true);
  const [copied, setCopied] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      );
    },
  });

  if (files.length > 0) {
    // This Process bar is totaly useless. Theres no uploading to cloud so no feedback but to show the uploading bar i just used timeout
    if (uploading) {
      setTimeout(() => {
        setUploading(false);
      }, 1400);

      return (
        <div className="w-full min-h-screen h-full flex items-center justify-center bg-backgroundwhite">
          <div className="max-w-[25rem] w-full h-36 rounded-xl bg-white shadow-xl font-medium mx-4 text-lg px-8 flex flex-col justify-center gap-7">
            <p>Uploading...</p>
            <div className="w-full h-1.5 bg-blue-200 rounded-md relative">
              <div className="h-full bg-blue-500 w-[6rem] rounded-lg absolute animate-loading"></div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-backgroundwhite flex w-screen h-screen">
          <div className=" m-auto border-2 bg-white border-white w-[550px] h-[450px] rounded-lg drop-shadow-xl">
            <h1 className="text-3xl pt-8 pb-4 text-center font-medium text-headingcolor">
              Your Image
            </h1>
            <img
              src={files[0].preview}
              alt="uploaded img"
              className="w-2/3 h-2/3 m-auto max-w-[475px] max-h-[400px]"
            />
            <div className="w-full px-[4px] h-[38px] my-4 rounded-lg border border-bordercolor items-center flex justify-between ">
              <p className="text-[14px] ml-2 overflow-hidden whitespace-nowrap text-ellipsis pr-4">
                {files[0].preview}
              </p>

              <CopyToClipboard
                onCopy={() => setCopied(true)}
                text={files[0].preview}
              >
                <button className="h-[30px] text-white  w-[74px] text-[14px] rounded-lg bg-blue-500 ">
                  {copied ? "Copied" : "Copy Link"}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      );
    }
  }
  return (
    <div className="bg-backgroundwhite flex w-screen h-screen">
      <div className=" m-auto border-2 bg-white border-white w-[500px] h-[425px] rounded-lg drop-shadow-xl">
        <h1 className="text-3xl pt-12 pb-4 text-center font-medium text-headingcolor">
          Upload your Image
        </h1>
        <h5 className="text-center text-headingcolor font-thin pb-8">
          File type should be jpg, png...
        </h5>
        <div
          {...getRootProps({ className: "dropzone" })}
          className="w-[338px] h-[219px] m-auto border-2 border-dashed border-blue-200 rounded-lg bg-somesortgray hover:border-dotted grid"
        >
          <input {...getInputProps()} />
          <img
            className="w-[125px] h-[125px] m-auto"
            src={imagethumb}
            alt="placeholder"
          />
          <h3 className="text-center">Drag & Drop your image here or</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
