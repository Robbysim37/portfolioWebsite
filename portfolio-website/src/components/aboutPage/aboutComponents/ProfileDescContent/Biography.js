import { Typography,Stack} from "@mui/material"


const Biography = () => {
    return(
        <Stack textAlign={"center"} sx={{width:"75%"}}>
        <Typography sx={{
        fontSize:"2rem",
        fontFamily:"'Rufina', serif",
        color:"text.white",
        margin:"1%"}} 
        variant="h1">Biography
        </Typography>
        <Typography sx={{
        fontSize:"1.3rem",
        fontFamily:"'Rufina', serif",
        color:"text.white",
        margin:"2%"}}>
            I was born in Wayne County MI June 1999
            and have spent my entire life so far in Michigan.
            Growing up, I always enjoyed technology. But I never looked into it as a career option
            until after Highschool.
        </Typography>
        <Typography sx={{
        fontSize:"1.3rem",
        fontFamily:"'Rufina', serif",
        color:"text.white",
        margin:"2%"}}>
            
            In fact, it wasn't until after my college experince that 
            I actually begun looking into the computer science field for myself. My first year of
            college was spent in a business major I was not passionate about. I then decided My
            sophmore year of college would be spent in a game-design major. However, after professors
            who were not willing to educate to the best of their ability, and a cirriculum that was not
            worth the cost of tuition, I decided college was not something I was interested in at the moment
        </Typography>
        <Typography sx={{
        fontSize:"1.3rem",
        fontFamily:"'Rufina', serif",
        color:"text.white",
        margin:"2%"}}>    
            
            I spent a couple years after my time at college exploring interests and working at XPO logistics
            as a machine operator. As of about a year ago, I quit my full time position at the warehouse in
            order to pursue education in computer science. With a mixture of self teaching experince
            and a self-paced coding bootcamp provided by BloomTech Institute of Technology, I have grown into
            a competant and confident FullStack developer!
        </Typography>

        </Stack>

    )
}

export default Biography