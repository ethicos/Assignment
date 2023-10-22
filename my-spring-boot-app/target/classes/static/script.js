document.getElementById("downloadButton").addEventListener("click", () => {
    window.location.href = "/download-template";
});

document.getElementById("uploadButton").addEventListener("click", () => {
    const fileInput = document.getElementById("dataFile");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a data file.");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    axios.post("/upload-data", formData)
        .then(response => {
            console.log("Upload successful");
            fetchData();
        })
        .catch(error => {
            console.error("Upload failed: ", error);
        });
});

function fetchData() {
    axios.get("/fetch-data")
        .then(response => {
            const data = response.data;
            const dataTable = document.getElementById("dataTable");
            dataTable.innerHTML = "";
            data.forEach(row => {
                const newRow = document.createElement("tr");
                newRow.innerHTML = `<td>${row.firstName}</td><td>${row.lastName}</td><td>${row.dateOfBirth}</td><td>${row.city}</td><td>${row.email}</td>`;
                dataTable.appendChild(newRow);
            });
        })
        .catch(error => {
            console.error("Data retrieval failed: ", error);
        });
}

fetchData();
