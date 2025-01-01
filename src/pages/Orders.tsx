import PostTable from "@/components/posts/PostTable";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";

const Orders = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostTable />
      <PostsPagination />
    </>
  );
};

export default Orders;
