const fileInput = document.getElementById("file")

function commit_war_crime() {

    const file = fileInput.files[0]
    const blob = new Blob([file])
    const blobURL = URL.createObjectURL(blob)
    const dowloadLink = document.createElement('a')
    dowloadLink.href = blobURL;
    dowloadLink.download = file.name
    dowloadLink.click()
    URL.revokeObjectURL(blobURL)
}
