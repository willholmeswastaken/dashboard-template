'use client';

import AutosizeInput from "@/components/ui/autosize-input";
import { useState } from "react";

export default function EnvironmentNew() {
    const [envValue, setEnvValue] = useState('');
    const [companyValue, setCompanyValue] = useState('');
    return (
        <div className="flex flex-col gap-y-4">
            <section className="flex flex-col gap-y-4 max-w-lg">
                <h1 className="text-xl">New Environment</h1>
                <span className="text-sm text-secondary-foreground">Type below to create your environment</span>
            </section>
            <section className="flex flex-row items-center">
                <AutosizeInput
                    value={envValue}
                    onChange={function (event) {
                        setEnvValue(event.target.value);
                    }}
                    placeholder="env"
                />
                <span>.</span>
                <AutosizeInput
                    value={companyValue}
                    onChange={function (event) {
                        setCompanyValue(event.target.value);
                    }}
                    placeholder="testcompany"
                />
                <span>.testholmes.com</span>
            </section>
        </div>
    )
};