import React from "react";
import EditContactData from "../../components/EditContactData";
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
                <EditContactData />
            </div>
        </div>
    );
};

export default Dashboard;
