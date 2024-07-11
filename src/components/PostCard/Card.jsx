import Link from "next/link";

const Card = ({ title, id, body }) => {
  return (
    <div>
      <div className="card bg-base-100/40 h-96 hover:shadow-xl hover:shadow-orange-200/10 hover:scale-105 duration-500 ">
        <div className="card-body">
          <h2 className="card-title text-xl font-bold  text-center">{title}</h2>
          <p>{body}</p>
          <div className="card-actions justify-center">
           
            <Link className="w-full" href={`/posts/${id}`}>
              <button className="btn h-full bg-cyan-400  text-black hover:bg-cyan-200">
                getPost
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
