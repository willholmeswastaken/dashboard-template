import { DataTable } from "../../components/data-table/table";
import { type Payment, columns } from "./columns";

export default function Users() {
    return (
        <div className="flex flex-col gap-y-2">
            <section className="flex flex-col gap-y-4 max-w-lg">
                <h1 className="text-xl">Users</h1>
                <span className="text-sm text-secondary-foreground">Search below to find users</span>
            </section>
            <section>
                <DataTable columns={columns} data={[{
                    id: '1',
                    amount: 100,
                    status: 'pending',
                    email: 'will@willholmes.dev'
                } as Payment,
                {
                    id: '2',
                    amount: 100,
                    status: 'pending',
                    email: 'bob@willholmes.dev'
                } as Payment,
                {
                    id: '3',
                    amount: 100,
                    status: 'pending',
                    email: 'will@willholmes.dev'
                } as Payment,
                {
                    id: '4',
                    amount: 100,
                    status: 'pending',
                    email: 'will@willholmes.dev'
                } as Payment,
                {
                    id: '5',
                    amount: 100,
                    status: 'pending',
                    email: 'will@willholmes.dev'
                } as Payment, {
                    id: '5',
                    amount: 100,
                    status: 'pending',
                    email: 'will@willholmes.dev'
                } as Payment, {
                    id: '5',
                    amount: 100,
                    status: 'pending',
                    email: 'will@willholmes.dev'
                } as Payment, {
                    id: '5',
                    amount: 100,
                    status: 'pending',
                    email: 'will@willholmes.dev'
                } as Payment, {
                    id: '5',
                    amount: 100,
                    status: 'pending',
                    email: 'will@willholmes.dev'
                } as Payment, {
                    id: '5',
                    amount: 100,
                    status: 'pending',
                    email: 'will@willholmes.dev'
                } as Payment, {
                    id: '5',
                    amount: 100,
                    status: 'pending',
                    email: 'will@willholmes.dev'
                } as Payment]} />
            </section>
        </div>
    )
}