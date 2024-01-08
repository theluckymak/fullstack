function addECMAInfo() {
    const javaScriptData = {
        name: 'JS',
        multiThread: false,
        born: 1995,
        cool: true,
    };

    const updatedJavaScriptData = {
        ...javaScriptData,
        currentECMA: 2023,
    };

    return updatedJavaScriptData;
}