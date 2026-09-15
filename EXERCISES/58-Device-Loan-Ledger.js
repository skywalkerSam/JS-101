// You are a software developer tasked with creating a ledger application to manage IT hardware devices provisioned by your company's Service Desk. The ledger is an object whose keys are asset tags and whose values are objects:

const equipmentLedger = {
  1: {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "11/30/2025",
  },
  2: {
    type: "Laptop",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
  3: {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "10/31/2025",
  },
  4: {
    type: "iPad",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
};

function checkoutDevice(ledger, assetTag, borrower) {
  let updatedLedger = JSON.parse(JSON.stringify(ledger));

  // asset not found
  const assetTags = [];
  for (const asset in ledger) {
    if (!Object.hasOwn(ledger, asset)) continue;

    assetTags.push(asset);
  }
  if (!assetTags.includes(assetTag)) {
    return { ledger: ledger, message: `${assetTag} not found.` };
  }

  // asset CheckedOut
  if (ledger[assetTag].status === "CheckedOut") {
    return { ledger: ledger, message: `${assetTag} already checked out.` };
  }

  updatedLedger[assetTag].borrower = borrower;
  updatedLedger[assetTag].status = "CheckedOut";

  return {
    ledger: updatedLedger,
    message: `${assetTag} borrowed by ${updatedLedger[assetTag].borrower.name}`,
  };
}

function checkinDevice(ledger, assetTag) {
  let updatedLedger = JSON.parse(JSON.stringify(ledger));

  // asset not found
  const assetTags = [];
  for (const asset in updatedLedger) {
    if (!Object.hasOwn(updatedLedger, asset)) continue;

    assetTags.push(asset);
  }
  if (!assetTags.includes(assetTag)) {
    return { ledger: ledger, message: `${assetTag} not found.` };
  }

  updatedLedger[assetTag].borrower = { name: "", email: "" };
  updatedLedger[assetTag].dueDate = "";
  updatedLedger[assetTag].status = "CheckedIn";

  return {
    ledger: updatedLedger,
    message: `${assetTag} returned.`,
  };
}

function listOverdueDevices(ledger, today) {
  const overdueDevices = [];
  for (const asset in ledger) {
    if (!Object.hasOwn(ledger, asset)) continue;

    const element = ledger[asset];
    if (
      element.status === "CheckedOut" &&
      parseInt(element.dueDate.split("/")[0]) < parseInt(today.split("/")[0])
    ) {
      overdueDevices.push(element);
    }
  }

  // sort overdueDevices
  objectLoop: for (let i = 0; i < overdueDevices.length - 1; i++) {
    sortingLoop: for (let z = 0; z < overdueDevices.length - 1 - i; z++) {
      const element = parseInt(overdueDevices[z].dueDate.split("/")[0]);
      const nextElement = parseInt(overdueDevices[z + 1].dueDate.split("/")[0]);
      if (nextElement < element) {
        const box = overdueDevices[z];
        overdueDevices[z] = overdueDevices[z + 1];
        overdueDevices[z + 1] = box;
      }
    }
  }

  return overdueDevices;
}

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}
