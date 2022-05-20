import React from "react";

const Blogs = () => {
  return (
    <div style={{ textAlign: "start" }}>
      <div
        style={{
          background: "#efefef",
          margin: "1rem 0",
          padding: " 1rem",
          borderRadius: "1rem",
        }}
      >
        <h1> 1. Difference between javascript and nodejs?</h1>
        <p style={{ fontSize: "1.5rem" }}>
          <span style={{ fontWeight: "bold" }}> NodeJS :</span> NodeJS is a
          cross-platform and opensource Javascript runtime environment that
          allows the javascript to be run on the server-side. Nodejs allows
          Javascript code to run outside the browser. Nodejs comes with a lot of
          modules and mostly used in server-side.
        </p>
        <p style={{ fontSize: "1.5rem" }}>
          <span style={{ fontWeight: "bold" }}>JavaScript : </span>
          Javascript is a high-level,multi-paradigm programming language. that
          is used for writing scripts on the website. it's capable enough to add
          HTML and play with the DOM. Mainly used on clientside.
        </p>
        <hr />
        <h1>2. When should you use nodejs and when should you use mongodb?</h1>
        <p style={{ fontSize: "1.5rem" }}>
          MongoDB is the Document Oriented Database. MongoDB stores a lot of
          data in JSON format. MongoDB's performance is much faster than any
          RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can
          work on multiple servers. MongoDB can handle a large number of access
          requests easily. There are 2 design patterns in programming. One is
          asynchronous programming and the other is synchronous programming.
          Node JS by default follows the Asynchronous pattern. That is, it does
          not wait for a task to be completed. In the meantime, NodeJS started
          another job. That's why we use nodeJS.
        </p>
        <hr />
        <h1> 3. Differences between sql and nosql databases?</h1>
        <p style={{ fontSize: "1.5rem" }}>
          SQL databases are relational, NoSQL databases are non-relational. SQL
          databases use structured query language and have a predefined schema.
          NoSQL databases have dynamic schemas for unstructured data.SQL
          databases are vertically scalable, while NoSQL databases are
          horizontally scalable.
        </p>
        <hr />
        <h1> 3. What is the purpose of jwt and how does it work?</h1>
        <p style={{ fontSize: "1.5rem" }}>
          JWT is an open standard used to share security information between two
          parties — a client and a server. Each JWT contains encoded JSON
          objects, including a set of claims. JWTs are signed using a
          cryptographic algorithm to ensure that the claims cannot be altered
          after the token is issued.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
