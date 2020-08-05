import React from "react";
import "../css/upload.css";
import back from "../image/icon-back.png";

export class Upload extends React.Component {
  componentDidMount() {
    document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
      const dropZoneElement = inputElement.closest(".drop-zone");

      dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
      });

      inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
          updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
      });

      dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
      });

      ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
          dropZoneElement.classList.remove("drop-zone--over");
        });
      });

      dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
          inputElement.files = e.dataTransfer.files;
          updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("drop-zone--over");
      });
    });

    function updateThumbnail(dropZoneElement, file) {
      let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

      // First time - remove the prompt
      if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
      }

      // First time - there is no thumbnail element, so lets create it
      if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
      }

      thumbnailElement.dataset.label = file.name;

      // Show thumbnail for image files
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
          thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
      } else {
        thumbnailElement.style.backgroundImage = null;
      }
    }
  }

  render() {
    return (
      <div className="upload">
        <div className="upload-container" data-aos="fade-in">
          <div className="upload-container-header">
            <a href="/">
              <img src={back} />
            </a>
          </div>

          <div className="upload-content">
            <div className="upload-form">
              <input
                type="text"
                placeholder="Song Title"
                id="title"
                name="title"
              />
              <input
                type="text"
                placeholder="Artist"
                id="artist"
                name="artist"
              />
              <textarea
                type="text"
                placeholder="Description"
                id="des"
                name="des"
              />
            </div>

            <div className="drop-zone">
              <span className="drop-zone__prompt">
                Drop file here or click to upload
              </span>
              <input type="file" name="myFile" className="drop-zone__input" />
            </div>
          </div>

          <input type="submit" class="input-submit" />
        </div>
      </div>
    );
  }
}
