import React from "react";
import "../css/view.css";
import back from "../image/icon-back.png";
import { Link } from "react-router-dom";
import { storage } from "../firebase";
import firebase from "firebase/app";

export class View extends React.Component {
  render() {
    return (
      <div className="view">
        <div className="view-container" data-aos="fade-in">
          <div className="view-content">
            <div className="view-content-header">
              <Link to="/">
                <img src={back} />
              </Link>
            </div>
          </div>

          <div className="sroll-menu">
            <a href="/">
              <div className="music-title">Pink Sweat$ - Honesty</div>
            </a>

            <a href="/">
              <div className="music-title">
                McKay & Jeff Bernat - Angel 2 Me
              </div>
            </a>

            <a href="/">
              <div className="music-title">
                jeebanoff (지바노프) - We (OUI) (ft. sogumm) [Slowed + Reverb]
                (onesung edit)
              </div>
            </a>

            <a href="/">
              <div className="music-title">Pink Sweat$ - Honesty</div>
            </a>

            <a href="/">
              <div className="music-title">
                McKay & Jeff Bernat - Angel 2 Me
              </div>
            </a>

            <a href="/">
              <div className="music-title">
                jeebanoff (지바노프) - We (OUI) (ft. sogumm) [Slowed + Reverb]
                (onesung edit)
              </div>
            </a>

            <a href="/">
              <div className="music-title">Pink Sweat$ - Honesty</div>
            </a>

            <a href="/">
              <div className="music-title">
                McKay & Jeff Bernat - Angel 2 Me
              </div>
            </a>

            <a href="/">
              <div className="music-title">
                jeebanoff (지바노프) - We (OUI) (ft. sogumm) [Slowed + Reverb]
                (onesung edit)
              </div>
            </a>

            <a href="/">
              <div className="music-title">Pink Sweat$ - Honesty</div>
            </a>

            <a href="/">
              <div className="music-title">
                McKay & Jeff Bernat - Angel 2 Me
              </div>
            </a>

            <a href="/">
              <div className="music-title">
                jeebanoff (지바노프) - We (OUI) (ft. sogumm) [Slowed + Reverb]
                (onesung edit)
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
