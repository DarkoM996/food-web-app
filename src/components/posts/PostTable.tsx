import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Link } from "react-router";
import posts from "@/data/posts";
import { Post } from "@/types/posts";

interface PostTableProps {
  limit?: number;
  title?: string;
}

const PostTable = ({ limit, title }: PostTableProps) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3>
    </div>
  );
};

export default PostTable;
