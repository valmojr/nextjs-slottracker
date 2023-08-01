import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return <section>
        {children}
    </section>
}

export async function generateStaticParams() {
    const eventCount = 120; // TODO - Fetch lenght of Event Array
    /*
        const eventCounter = await (await Fetch(url)).json();
    */
    const guildCount = 30; // TODO -  Fetch of Guild/Sv Array
    /*
        const guildCounter = await (await Fetch(url)).json();
    */

    return { eventCount, guildCount };
}
