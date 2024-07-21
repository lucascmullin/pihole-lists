[<img src="https://wp-cdn.pi-hole.net/wp-content/uploads/2016/12/Vortex-R.png" width="288" height="288">](https://pi-hole.net/)
<br/>
<br/>
<br/>

# [Pi Hole](https://pi-hole.net/) Lists

Project with blocklists for Pi Hole and a domain generator from a base name, example:

**Base name:** test\
**Home urls:** www, pt\
**End urls:** com, com.br

**Results:**
```txt
test.com
test.com.br
www.test.com
www.test.com.br
pt.test.com
pt.test.com.br
```


## Blick lists

Block list for Pi Hole.

`./block-lists`

## basis for crating lists

Base with names to generate domains.

`./base`

## Update lists

Update blocklist from base lists.

`npm start`