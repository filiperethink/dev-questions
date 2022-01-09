import {
  collection,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { CandidateInfoType } from "../types";
import { DATABASE } from "./utils";

export const createCandidate = async (
  candidate: CandidateInfoType
): Promise<any> => {
  const newCandidateRef = doc(collection(DATABASE, "candidates"));
  const newCandidates = {
    ...candidate,
    createdAt: Date.now(),
    correctQuestions: 0,
  };
  try {
    setDoc(newCandidateRef, newCandidates);
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
};

// Get a list of all Candidates.
export const getAllCandidates = async (): Promise<DocumentData> => {
  const querySnapshot = await getDocs(collection(DATABASE, "candidates"));
  const allCadidates: DocumentData = querySnapshot.docs.map(
    (doc: DocumentSnapshot) => doc.data()
  );
  return allCadidates;
};
