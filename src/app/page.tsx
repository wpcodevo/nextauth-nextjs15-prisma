import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "../../auth";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/api/auth/signin");
  }

  const user = session?.user;

  return (
    <section className="to-blue-600  min-h-screen pt-20">
      <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
        <div>
          <p className="mb-3 text-5xl text-center font-semibold">
            Profile Page
          </p>
          <div className="flex items-center gap-8">
            <div>
              <Image
                src={user?.image ? user.image : "/default.png"}
                alt={`profile photo of ${user?.name}`}
                width={90}
                height={90}
              />
            </div>
            <div className="mt-8">
              <p className="mb-3">ID: {user?.id}</p>
              <p className="mb-3">Name: {user?.name}</p>
              <p className="mb-3">Email: {user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
