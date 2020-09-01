import React from "react";
import "../css/upload.css";
import back from "../image/icon-back.png";
import { storage } from "../firebase";
import { Link } from "react-router-dom";
import firebase from "firebase";

export class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
      url: "",
      progress: 0,
    };
  }

  handleUpload = () => {
    var time = Date.now();

    var post = {
      Key: time,
      Title: document.getElementById("title").value,
      Artist: document.getElementById("artist").value,
      Des: document.getElementById("des").value,
    };

    var firebaseRef = firebase.database().ref();
    firebaseRef.child(time).set(post);

    const { video } = this.state;
    const uploadTask = storage.ref(`video/${time}`).put(video);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        this.setState({ progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("video")
          .child(video.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  handleChange = (e) => {
    console.log(e.target.file);
    if (e.target.files[0]) {
      const video = e.target.files[0];
      this.setState({ video });
    }
  };

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
            <Link to="/">
              <img src={back} alt="back-icon" />
            </Link>
          </div>

          <div className="upload-form">
            <div className="upload-form-content">
              <div className="upload-form-input">
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
                <input
                  type="file"
                  name="myFile"
                  className="drop-zone__input"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <button className="input-submit" onClick={this.handleUpload}>
              Submit
            </button>

            <progress
              value={this.state.progress}
              max="100"
              className="uploadProgress"
            />

            <p>{this.state.progress}%</p>
          </div>
        </div>
      </div>
    );
  }
}
