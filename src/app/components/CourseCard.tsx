import { cn, formatDate } from "@/utils";
import { UserPlus, ShoppingBasket, AArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Skeleton } from "@/app/components/ui/skeleton";
import { CourseTypeCard } from "@/types";
import ConfettiButton from "@/app/components/ui/ConfettiButton";

const CourseCard = ({ post }: { post: CourseTypeCard }) => {
  const { _createdAt, views, title, category, _id, image, description } = post;

  return (
    <li className="course-card group relative overflow-hidden">
      {/* 日期和浏览量 */}
      <div className="flex-between mb-4">
        <p className="course-card_date text-dark-lighter">
          {formatDate(_createdAt)}
        </p>
        <div className="flex items-center gap-1.5">
          <UserPlus className="size-5 text-primary" />
          <span className="text-16-medium group-hover:text-primary/60 transition-colors">
            {views}
          </span>
        </div>
      </div>

      {/* 标题 */}
      <Link
        href={`/course/${_id}`}
        className="block hover:text-primary transition-colors mb-4"
      >
        <h3 className="text-26-semibold line-clamp-1 text-dark-DEFAULT">
          {title}
        </h3>
      </Link>

      {/* 课程描述和图片 */}
      <Link href={`/course/${_id}`} className="block group mb-4">
        <p className="course-card_desc mb-3">{description}</p>

        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className="course-card_img group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-[10px]"></div>
        </div>
      </Link>

      {/* 底部分类和详情按钮 */}
      <div className="flex-between mt-4">
        <Button className="course-card_btn group/button" asChild>
          {/* 使用图标组件 */}
          <ConfettiButton className="flex items-center gap-2 bg-black text-white hover:bg-primary-dark px-4 py-2 rounded-full">
            <AArrowUp className="h-4 w-4" />
            <span>Approve</span>
          </ConfettiButton>
        </Button>

        <Button className="course-card_btn group/button" asChild>
          {/* 使用图标组件 */}
          <ConfettiButton
            className="flex items-center gap-2 bg-black text-white hover:bg-primary-dark px-4 py-2 rounded-full"
            confettiText="Bought!"
          >
            <ShoppingBasket className="h-4 w-4" />
            <span>Buy</span>
          </ConfettiButton>
        </Button>
      </div>
    </li>
  );
};

export const CourseCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li
        key={cn("skeleton", index)}
        className="course-card_skeleton animate-pulse"
      >
        <Skeleton className="w-full h-full" />
      </li>
    ))}
  </>
);

export default CourseCard;
