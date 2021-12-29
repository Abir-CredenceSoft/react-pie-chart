export function getMeaningfulData(data = []) {
  const options = {
    primaryKey: "externalSite",
    actions: [
      { key: "totalAmount", action: "sumOfValues" },
      { key: "bookingCounts", action: "sumOfCounts" },
    ],
  };

  const meaningfulData = [];
  data.forEach((booking) => {
    if (
      //primaryKey----------------
      meaningfulData.filter((e) => e.externalSite === booking.externalSite)
        .length === 0
    ) {
      //action----------------
      meaningfulData.push({
        externalSite: booking.externalSite,
        totalAmount: booking.totalAmount,
        bookingCounts: 1,
      });
    } else {
      const indexInMData = meaningfulData.findIndex(
        (e) => e.externalSite === booking.externalSite
      );
      //action----------------
      meaningfulData[indexInMData].totalAmount =
        meaningfulData[indexInMData].totalAmount + booking.totalAmount;
      meaningfulData[indexInMData].bookingCounts =
        meaningfulData[indexInMData].bookingCounts + 1;
      // console.log("after");
      // console.log(meaningfulData[indexInMData]);
    }
  });
  // console.log({ meaningfulData });
  return meaningfulData;
}
