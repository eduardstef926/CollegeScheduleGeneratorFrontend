import { Institution } from "../models/Institution";
import { StudyProgram } from "../models/InstitutionStudyProgram";

export interface InstitutionProps {
	resultLink?: string;
	institutions?: Institution[];
	studyPrograms?: StudyProgram[];
	headerList: string[];
}