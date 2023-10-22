<!DOCTYPE HTML>
<html>
<head>
    <title>Template Management</title>
    <link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
    <h2>Template Management</h2>
    
    <button id="downloadButton">Download Template</button>
    
    <div class="button-section">
        <input type="file" id="dataFile" />
        <button id="uploadButton">Upload Data</button>
    </div>
    

    
    <table id="dataTable">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>City</th>
            <th>Email</th>
        </tr>
    </table>
    
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
