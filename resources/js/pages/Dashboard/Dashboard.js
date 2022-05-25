import React from "react";
import ClientOrders from "../../components/ClientOrders";
import EditContactData from "../../components/EditContactData";
import EditPassword from "../../components/EditPassword";
import EditProfile from "../../components/EditProfile";
import Sidebar from "../../components/Sidebar";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
    return (
        <div class={styles.root}>
            <h2 class={styles.title}>WILLKOMMEN IN DEINEM KUNDENKONTO.</h2>
            <h2 class={styles.bigTitle}>HALLO SEBASTIAN.</h2>
            <div class={styles.container}>
                <Sidebar />
                <EditPassword />
            </div>
        </div>
    );
};

export default Dashboard;
