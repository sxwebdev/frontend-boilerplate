import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Fronted boilerplate</span>
      </h1>
      <p
        className="mx-auto mt-3 max-w-md text-base text-gray-500
      sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
      >
        <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="mt-5 md:mt-10">
        <Link
          to="/page"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600
                py-3 px-8 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2
                focus:ring-indigo-500 focus:ring-offset-2 md:py-4 md:px-10 md:text-lg"
        >
          Page
        </Link>
      </div>
    </div>
  );
};

export default Home;
