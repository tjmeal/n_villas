"use client";
import React, { useEffect, useState } from "react";
import BlogFilter from "./BlogFilter";
import BlogPagination from "./BlogPagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const MainBlogArea = ({ blogCategory, blogs: mainBlog }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchFromUrl = useSearchParams();
  const searchParam = searchFromUrl.get("category");
  const searchType = searchFromUrl.get("type");

  const [blogs, setBlogs] = useState([...mainBlog]);
  const [category, setCategory] = useState(false);
  const [type, setType] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [search, setSearch] = useState("");

  const handleCategory = (value) => {
    let queryStr = "";
    if (category && type) {
      queryStr = `?category=${searchParam}&type=${selectedType}`;
    }
    if (category && !type) {
      queryStr = `?category=${value}`;
    }
    router.push(pathname + queryStr);
    setCategory(!category);
    setSelectedType(null);
  };

  const handleType = (value) => {
    setSelectedType(value);
    let queryStr = "";

    if (category && type) {
      queryStr = `?category=${searchParam}&type=${value}`;
    }

    if (!category && type) {
      queryStr = `?type=${value}`;
    }

    router.push(pathname + queryStr);
    setType(!type);
    setSelectedCategory(null);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const searchString = e.target.value.toLowerCase();

    const newBlogs = mainBlog.filter((blog) =>
      blog.data.title.toLowerCase().includes(searchString)
    );
    setBlogs(newBlogs);
  };

  const handleResetBlogs = () => {
    router.push(pathname);
    setSearch("");
    setSelectedCategory(null);
    setSelectedType(null);
    setType(false);
    setCategory(false);
    setBlogs(blogs);
  };

  const blogFilterFunction = {
    handleCategory,
    handleType,
    blogCategory,
    selectedCategory,
    selectedType,
    category,
    setCategory,
    type,
    setType,
    search,
    handleSearch,
    handleResetBlogs,
  };

  useEffect(() => {
    if (!searchParam || !type) {
      setBlogs([...mainBlog]);
    }
    if (searchParam) {
      const newBlogs = mainBlog.filter(
        (blog) => blog.data.category === searchParam
      );
      setBlogs(newBlogs);
      setSelectedCategory(searchParam);
    }

    if (searchType) {
      const newBlogs = mainBlog.filter(
        (blog) => blog.data.type.toLowerCase() === searchType.toLowerCase()
      );
      setBlogs(newBlogs);
      setSelectedType(searchType);
    }
  }, [searchParam, mainBlog, type, searchType]);

  return (
    <section className="filter blog-filter">
      <div className="container">
        <div className="row">
          <div className="filter-title">
            <h3>Real Estate News &amp; Blogs</h3>
          </div>
          <BlogFilter blogFilterFunction={blogFilterFunction} />
        </div>
      </div>
      <BlogPagination blogs={blogs} />
    </section>
  );
};

export default MainBlogArea;
