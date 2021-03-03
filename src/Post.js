import { Avatar } from "@material-ui/core";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";

function Post({ name, description, massage, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{massage}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="color" />

        <InputOption Icon={ChatOutlined} title="Comments" color="color" />

        <InputOption Icon={ShareOutlined} title="Share" color="color" />

        <InputOption Icon={SendOutlined} title="Send" color="color" />
      </div>
    </div>
  );
}

export default Post;
