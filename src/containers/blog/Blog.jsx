import React from "react";
import { Article } from "../../components";
import {
  blog00,
  blog01,
  blog02,
  blog03,
  blog04,
} from "../../helpers/blogsData";
import "./blog.scss";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening,
          <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_A">
          <Article
            imgUrl={blog04}
            date="Jan 22, 2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_B">
          <Article
            imgUrl={blog01}
            date="Jan 22, 2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog02}
            date="Jan 22, 2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog03}
            date="Jan 22, 2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog00}
            date="Jan 22, 2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
