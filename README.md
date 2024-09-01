# ReachInBox-Frontend

## Overview

This repository contains the frontend code for the ReachInBox application, developed using React with JavaScript. The application provides an interface for users to manage their emails with features such as viewing, sending, and deleting emails. This project was created as part of an assignment for ReachInBox.

## Technologies Used ( Frontend )

- **JavaScript:** The programming language used for building the frontend logic.

- **React:** A powerful JavaScript library for building user interfaces.

- **CSS:** For styling and responsive design of the application.

## Deployment

The application is deployed on netlify and can be accessed [here](https://reachinbox-react-app.netlify.app/).

## Demo Video :

https://github.com/user-attachments/assets/8689dc89-5108-4e1c-aeb5-53d6708dc694

## Features

- **Authentication:** Secure user authentication to protect user data.

- **View Emails:** Retrieve and display all emails from Onebox.

- **Send Emails:** Compose and send new emails within a specific thread.

- **Delete Emails:** Remove unwanted emails from a specific thread.

## API Endpoints

#### Fetch All Emails

<pre><code>GET {{baseurl}}/onebox/list </code></pre>

- Retrieves a list of all emails.

#### Fetch Emails from Onebox

<pre><code>GET {{baseurl}}/onebox/messages/:thread_id </code></pre>

- Fetches all emails associated with a specific thread ID

#### Send an Email

<pre><code>POST {{baseurl}}/onebox/reply/:thread_id </code></pre>

- Sends a reply to a specific email thread, identified by the **`thread_id`**

#### Delete an Email

<pre><code>DELETE {{baseurl}}/onebox/messages/:thread_id </code></pre>

- Deletes an email within a thread specified by the **`thread_id`**.

## Prerequisites

- **Node.js:** JavaScript runtime environment
- **npm:** Node package manager (comes with Node.js)

---
