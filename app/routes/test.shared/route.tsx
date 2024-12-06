import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Shared Layout" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <div className="bg-white p-8 rounded text-slate-900 text-lg space-y-8 w-full max-w-2xl">
            Shared Layout with test route
        </div>
    );
}
