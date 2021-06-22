db.createView(
    "ViewAttendee1",
    "User",
    [
    {​​​​​​​​ $project: {​​​​​​​​ _id: 1, Email: 1, Name: {​​​​​​​​ $concat: ["$FirstName", " ", "$LastName"] }​​​​​​​​, AccountID: "", AccountName: "", AttendeeType: "user", IsActive: 1, UserStatus:1 ,Tag:1 }​​​​​​​​ }​​​​​​​​,
    {​​​​​​​​
                    $group: {​​​​​​​​
                        "_id": null,
                        "first": {​​​​​​​​
                        $push: "$$ROOT"
                        }​​​​​​​​
                    }​​​​​​​​
                }​​​​​​​​,
    {​​​​​​​​
        $lookup: {​​​​​​​​
            from: "Contact",
            let: {​​​​​​​​ }​​​​​​​​,
            pipeline: [
                {​​​​​​​​ $lookup: {​​​​​​​​ from: "Account", localField: "AccountID", foreignField: "_id", as: "Account" }​​​​​​​​ }​​​​​​​​,
                {​​​​​​​​ $unwind: {​​​​​​​​ path: "$Account", preserveNullAndEmptyArrays: true }​​​​​​​​ }​​​​​​​​,
                {​​​​​​​​ $project: {​​​​​​​​ _id: 1, Email: 1, Name: {​​​​​​​​ $concat: ["$FirstName", " ", "$LastName"] }​​​​​​​​, AccountID: {​​​​​​​​ $toString: "$AccountID"}​​​​​​​​, AccountName: "$Account.Name", AttendeeType: "contact", IsActive: 1, UserStatus:{​​​​​​​​$cond:{​​​​​​​​if : {​​​​​​​​$eq:["$IsActive",true]}​​​​​​​​,then:"Active",else:"InActive"}​​​​​​​​ }​​​​​​​​,Tag:1 }​​​​​​​​,OwnerID:1 }​​​​​​​​,
            ],
            as: "second"
        }​​​​​​​​
    }​​​​​​​​, 
    {​​​​​​​​
        $project: {​​​​​​​​
            "all": {​​​​​​​​ $concatArrays: ["$first", "$second"] }​​​​​​​​ // merge the two collections
        }​​​​​​​​
    }​​​​​​​​, {​​​​​​​​
        $unwind: "$all" // flatten the resulting array
    }​​​​​​​​, {​​​​​​​​
        $replaceRoot: {​​​​​​​​ "newRoot": "$all" }​​​​​​​​ // move content of "all" field all the way up 
    }​​​​​​​​]
)


