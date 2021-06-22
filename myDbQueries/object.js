db.getCollection('Page').update({PageName:"TermsAndCondition"},{ $set:{ "ObjectName" : "TermsCondition"}})

db.getCollection('Page').insert({
    "_id" : ObjectId("609517dd328e0eb5ffbc9982"),
    "PageName" : "Term&ConditionBasic",
    "DisplayName" : "Terms And Conditions",
    "Type" : "ObjectDetail",
    "ObjectName" : "TermsCondition",
    "Fields" : [ 
        {
            "Name" : "IsEnabled",
            "Sequence" : 1,
            "ColumnWidth" : 4
        }, 
        {
            "Name" : "IsMandatory",
            "Sequence" : 2,
            "ColumnWidth" : 4
        }, 
        {
            "Name" : "Title",
            "Sequence" : 3,
            "ColumnWidth" : 6
        }, 
        {
            "Name" : "Document",
            "Sequence" : 4,
            "ColumnWidth" : 6
        }, 
        {
            "Name" : "Description",
            "Sequence" : 5,
            "ColumnWidth" : 12
        }
    ],
    "IsPermissionRequired" : false
})

db.getCollection('ObjectSchema').insert({
        "_id" : ObjectId("6093f33c328e0eb5ffb0713d"),
        "Name" : "TermsCondition",
        "DisplayName" : "Terms And Conditions",
        "ApiName" : "TermsCondition",
        "Fields" : [ 
            {
                "Name" : "IsEnabled",
                "DisplayName" : "Enable Terms and Condition",
                "UIDataType" : "checkbox"
            }, 
            {
                "Name" : "IsMandatory",
                "DisplayName" : "Mandatory On Website",
                "UIDataType" : "checkbox",
                "DefaultValue" : false
            }, 
            {
                "Name" : "Name",
                "DisplayName" : "Name",
                "UIDataType" : "text"
            }, 
            {
                "Name" : "Title",
                "DisplayName" : "Title",
                "UIDataType" : "text",
                "IsRequired" : true
            }, 
            {
                "Name" : "Document",
                "DisplayName" : "Document",
                "UIDataType" : "file",
                "type" : "public",
                "IsRequired" : true
            }, 
            {
                "Name" : "Description",
                "DisplayName" : "Description",
                "UIDataType" : "texteditor",
                "IsRequired" : true,
                "ApiName" : "Description"
            }
        ]})
db.getCollection('TermsCondition').insertMany([
        {
            "_id" : ObjectId("6090f436c08707158bf3fffb"),
            "Name" : "ExternalInvite",
            "IsEnabled" : true,
            "Title" : "TermsCondition",
            "Description" : "<div>\n</div><div>sdsdfsjnkjbbnm</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div><div>\n</div>",
            "IsActive" : true,
            "CreatedDate" : ISODate("2020-11-06T13:16:45.775Z"),
            "CreatedBy" : ObjectId("5c750d9ac2adf520208dbbea"),
            "ModifiedBy" : ObjectId("5f4cc6b1fb2c522c9174f254"),
            "ModifiedDate" : ISODate("2021-05-19T09:29:01.282Z"),
            "IsMandatory" : false,
            "DocumentFiles" : false
        }
        ])