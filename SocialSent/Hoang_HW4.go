package main

import (
	"encoding/csv"
	"fmt"
	"os"
	"strconv"
	"strings"
	"unicode"
)

var scoreTable map[string]float64

func main() {
	buildSocialSentimentTable()

	fmt.Println("[word: current_score, accumulated_score]")
	var score, filename = getSocialSentimentScore()
	var star = getStarRating(score)

	fmt.Printf("\n%s Score: %.2f\n", filename, score)
	fmt.Printf("%s Star: %d\n", filename, star)
}

// build social sentiment table from socialsent.csv file
func buildSocialSentimentTable() {
	scoreTable = make(map[string]float64)

	// open file
	file, err := os.Open("socialsent.csv")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	reader := csv.NewReader(file)

	// skip header
	_, err = reader.Read()
	if err != nil {
		panic(err)
	}

	records, err := reader.ReadAll()
	if err != nil {
		panic(err)
	}

	// build table
	for _, record := range records {
		word := record[0]
		score, err := strconv.ParseFloat(record[1], 64) // cast score from string to float
		if err != nil {
			panic(err)
		}

		scoreTable[word] = score
	}
}

// get total sentiment score and return it and the file used
func getSocialSentimentScore() (float64, string) {
	var score float64 = 0

	filename := getFilename()
	data, err := os.ReadFile(filename)
	if err != nil {
		panic(err)
	}

	cleaned := removeNonAlphanumeric(string(data)) // remove non-alphanumeric characters
	words := strings.Fields(cleaned)               // array of strings

	for _, word := range words {
		var current_score float64 = scoreTable[strings.ToLower(word)] // ensure lowercase - table is lowercased
		score += current_score                                        // update the score

		fmt.Printf("%s: %.2f, %.2f\n", word, current_score, score)
	}

	return score, filename
}

// calculate star rating from score
func getStarRating(score float64) int {
	switch {
	case score < -5.0:
		return 1
	case score >= -5.0 && score < -1.0:
		return 2
	case score >= -1.0 && score < 1.0:
		return 3
	case score >= 1.0 && score < 5.0:
		return 4
	case score >= 5.0:
		return 5
	}

	return 0
}

//
// Additional Functions
//

// check for filename passed in cmd args, falls back to default "review.txt" if not
func getFilename() string {
	if len(os.Args) > 1 {
		return os.Args[1]
	}
	return "review.txt"
}

// removes non-alphanumeric characters and spaces [a-zA-Z] [0-9]
func removeNonAlphanumeric(s string) string {
	var sb strings.Builder
	for _, r := range s {
		if unicode.IsLetter(r) || unicode.IsDigit(r) || unicode.IsSpace(r) {
			sb.WriteRune(r)
		}
	}
	return sb.String()
}
