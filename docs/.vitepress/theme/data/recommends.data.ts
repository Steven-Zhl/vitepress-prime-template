import { createContentLoader } from "vitepress";
import { ContentData } from "vitepress";

// 获取推荐文章列表
export default createContentLoader("**/*.md", {
  includeSrc: false,
  render: false,
  excerpt: false,
  transform: (data: ContentData[]) => {
    return data.filter((post: ContentData) => {
      return post.frontmatter.recommend === true || typeof post.frontmatter?.recommend === "number"
    }).sort((a: ContentData, b: ContentData) => {
      const aRank = typeof a.frontmatter.recommend === "boolean" ? 1 : a.frontmatter.recommend;
      const bRank = typeof b.frontmatter.recommend === "boolean" ? 1 : b.frontmatter.recommend;
      return bRank - aRank;
    })
  }
});
