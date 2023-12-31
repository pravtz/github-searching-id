import {ReaderLayout} from "@/components/layouts/ReaderLayout";

export default function SearchLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <header>
                <ReaderLayout/>
            </header>
            {children}
        </div>
    )
}