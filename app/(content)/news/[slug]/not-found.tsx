export default function NewsNotFoundPage() {
  return (
    <div id="error">
      <h1>New Article Not Found</h1>
      <p>Unfortunately, we could not find the requested article</p>
    </div>
  );
};

// for slug not found, we can create a custom not found page for the news article. This will be displayed when a user tries to access a news article that does not exist. The `NewsNotFoundPage` component provides a user-friendly message indicating that the requested article could not be found.