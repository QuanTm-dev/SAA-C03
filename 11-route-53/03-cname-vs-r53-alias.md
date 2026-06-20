# CNAME vs R53 Alias

## Problems with CNAME

- Limitations of CNAME: Cannot use CNAME for a naked/apex domain. For example, you cannot create a CNAME record for `example.com`.
- Problems: Many AWS services give you a domain name instead of an IP address. With CNAME, you would have to create a CNAME record for `www.example.com` pointing to the AWS service domain name, but you cannot create a CNAME for `example.com`. If the user tries to access `example.com`, it will not work because there is no CNAME record for the apex domain.

## Solution: R53 Alias Records

- Alias records map a NAME to another AWS resource.
- Can be used for both the apex domain and normal records (www.example.com).
- There is no charge for queries to Alias records that are mapped to AWS resources.
- Rule of thumb: If you want to point to an AWS resource, use an Alias record.
- Alias should have the same _type_ as the AWS resource you are pointing to. For example, if you are pointing to an S3 bucket, use an Alias record of type A. If you are pointing to a CloudFront distribution, use an Alias record of type CNAME.
