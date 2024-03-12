import { Post, PostsService } from "./posts.service";

describe("PostsService", () => {
  let postsService: PostsService;
  const post: Omit<Post, "id" | "date"> = {
    text: "Mocked post",
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: "Some pre-existing post" });
  });

  it("should add a new post", () => {
    // реализуйте тест-кейс
    postsService.create(post);

    expect(postsService.getAll()).toEqual(
      expect.arrayContaining([expect.objectContaining(post)])
    );
  });

  it("should find a post", () => {
    // реализуйте тест-кейс
    const newPost = postsService.create(post);

    expect(postsService.find(newPost.id)).toEqual(newPost);
  });
});
