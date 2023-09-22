import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function EnvironmentSelector() {
    const router = useRouter();

    const onValueChange = (val: string) => {
        console.log(val);
        if (val === 'new') {
            void router.push('/environment/new')
        }
    };

    return (
        <Select onValueChange={onValueChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="dev" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Environment</SelectLabel>
                    <SelectItem value="dev">dev</SelectItem>
                    <SelectItem value="prod">prod</SelectItem>
                    <SelectItem value="new">Create New</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}