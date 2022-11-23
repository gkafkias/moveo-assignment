import useSWR from "swr";
import { ProfileCard } from "../components/profileCard/ProfileCard";
import { User } from "../interfaces/user";

export const HomeHOC = () => {
  // @ts-ignore
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/users`,
    fetcher
  );

  if (error) return <div>Failed to load. Please refresh your page.</div>;

  return (
    <div className="home">
      {data &&
        data.map((user: User) => <ProfileCard key={user.id} {...user} />)}
    </div>
  );
};
