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

  return (
    <div className="home">
      {error && <div>Failed to load. Please refresh your page.</div>}
      {data &&
        !error &&
        data.map((user: User) => <ProfileCard key={user.id} {...user} />)}
    </div>
  );
};
