import Card from "@/components/PostCard/Card";
import getPost from "@/GetApi/api";
const page = async () => {
  const posts = await getPost();

  return (
    <div>
      <p className="text-5xl font-bold pt-2 text-center">All Posts</p>
      <div className="p-5 grid grid-cols-4 gap-5">
        {posts.map(({ id, title, body }) => (
          <Card key={id} title={title} id={id} body={body} />
        ))}
      </div>
    </div>
  );
};

export default page;
