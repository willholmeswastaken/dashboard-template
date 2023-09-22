import AppCard from "@/components/app-card";

export default function Apps() {
    return (
        <div className="flex flex-col gap-y-6">
            <section className="flex flex-col gap-y-4 max-w-lg">
                <h1 className="text-xl">Apps</h1>
            </section>
            <section>
                <AppCard />
            </section>
        </div>
    )
}