import React from "react";
import "../css/view.css";
import back from "../image/icon-back.png";
import { Link } from "react-router-dom";
import firebase from "firebase/app";

export class View extends React.Component {
  retrievePost(title, artist, dev, key) {
    document.getElementsByClassName("title")[0].innerHTML = "Title: " + title;
    document.getElementsByClassName("artist")[0].innerHTML =
      "Artist: " + artist;
    document.getElementsByClassName("des")[0].innerHTML = "Description: " + dev;

    var storageRef = firebase.storage().ref();
    storageRef
      .child("video/" + key)
      .getDownloadURL()
      .then((url) => {
        document.getElementsByClassName("view-video")[0].src = url;
      });
  }

  componentDidMount() {
    // Retrieving all data from database
    var ref = firebase.database().ref().orderByKey();
    ref.once("value").then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        var title_val = childSnapshot.val().Title;
        var artist_val = childSnapshot.val().Artist;
        var des_val = childSnapshot.val().Des;
        var key_val = childSnapshot.val().Key;

        var newPost = document.createElement("a");
        var newTitle = document.createElement("div");

        newTitle.innerHTML = artist_val + " - " + title_val;
        newTitle.setAttribute("class", "music-title");

        newPost.addEventListener("click", () =>
          this.retrievePost(title_val, artist_val, des_val, key_val)
        );
        newPost.append(newTitle);

        document.getElementsByClassName("scroll-menu")[0].append(newPost);
      });
    });
  }

  render() {
    return (
      <div className="view">
        <div className="view-container" data-aos="fade-in">
          <div className="view-content-header">
            <Link to="/">
              <img src={back} alt="back-icon" />
            </Link>
          </div>

          <div className="view-content">
            <div>
              <p className="title">Title: </p>
              <p className="artist">Artist: </p>
              <p className="des">Description: </p>
            </div>

            <video className="view-video" controls></video>
          </div>

          <div className="scroll-menu"></div>
        </div>
      </div>
    );
  }
}
