import { Button } from "@tkcrm/ui";

const Page: React.FC = () => {
  return (
    <div className="p-5 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
        <span className="block xl:inline">Hello from nested page</span>
      </h1>
      <div className="mt-5">
        <Button to="/" type="link" size="lg" rounded className="px-5">
          Back
        </Button>
      </div>
    </div>
  );
};

export default Page;
