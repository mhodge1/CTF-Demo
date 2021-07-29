window.addEventListener('DOMContentLoaded', event => {


    const datatablesSimple = document.getElementById('incident_table_demo');
    if (incident_table_demo) {
        new simpleDatatables.DataTable(incident_table_demo);
    }
});
