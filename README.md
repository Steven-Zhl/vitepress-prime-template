# VitePress Prime Template

> A VitePress template with PrimeVue and Tailwind CSS.

## frontmatter设计

```typescript
interface Frontmatter {
  title: string; // 文章标题
  description?: string; // 文章描述
  tags?: string[]; // 文章标签
  categories?: string[]; // 文章分类
  recommend?: boolean | number; // 首页推荐，默认为false，true时等效于1，数字越大越靠前

  author?: string; // 作者，为空则采用theme.author中的内容
}
```
