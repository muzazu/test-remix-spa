import {
    type ClientLoaderFunctionArgs,
    Link,
    useLoaderData,
} from "@remix-run/react";

export const clientLoader = async ({ params }: ClientLoaderFunctionArgs) => {
    const res = await new Promise<{ id: string; name: string }>((resolve) =>
        resolve({ id: params.param ?? "", name: "Wow Detail" })
    );
    if (!res) {
        throw new Response("Not Found", { status: 404 });
    }
    return { res };
};

export const meta = ({
    data,
}: {
    data: ReturnType<typeof useLoaderData<typeof clientLoader>>;
}) => {
    return [{ title: `Dynamic Segment ${data?.res.name} - ${data?.res.id}` }];
};

export default function Index() {
    const data = useLoaderData<typeof clientLoader>();
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col items-center gap-16">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Dynamic Segment {data.res.id} {data.res.name}
                    </h1>
                </header>

                <p>No shared layout</p>

                <Link
                    to="/"
                    className="py-2 px-8 hover:opacity-80 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                >
                    Home
                </Link>
                <Link
                    to="/test"
                    className="py-2 px-8 hover:opacity-80 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                >
                    Test
                </Link>
            </div>
        </div>
    );
}
