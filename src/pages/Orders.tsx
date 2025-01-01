import PostTable from "@/components/posts/PostTable";
import BackButton from "@/components/BackButton";

const Orders = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostTable />
    </>
  );
};

export default Orders;
