"use client";
import React, { useState } from "react";
import axios from "axios";
import styles from "./page.module.css";

function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postedBy, setPostedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/jobs", { title, description, postedBy })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Post a Job</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Job Title"
          className={styles.input}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Job Description"
          className={styles.textarea}
        />
        <input
          type="text"
          value={postedBy}
          onChange={(e) => setPostedBy(e.target.value)}
          placeholder="Posted By"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Post Job
        </button>
      </form>
    </div>
  );
}

export default PostJob;
