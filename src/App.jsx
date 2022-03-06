import AddBlog from "./components/AddBlog";
import BlogList from "./components/BlogList";
import BlogContextProvider from "./contexts/BlogContext";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BlogContextProvider>
        <div className="container py-4">
          <BlogList />
          <AddBlog />
        </div>
      </BlogContextProvider>
    </div>
  );
}

export default App;
