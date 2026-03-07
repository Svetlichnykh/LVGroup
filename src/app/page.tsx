import Welcome from "@/widgets/welcome-page/Welcome";
import ServicesListComponent from "@/widgets/services-list/Services-list";
import Order from "@/components/order/Order";
import CasesList from "@/components/cases-list/Cases-list";

export default function Home() {
    return (
        <>
            <Welcome />
            <CasesList onlyHomePage={true} />
            <ServicesListComponent />
            <Order nmt={true} />
        </>
    );
}
